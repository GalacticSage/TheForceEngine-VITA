#include "vitaKeyboard.h"
#include <TFE_System/system.h>
#include <cstring>

#ifdef TFE_VITA
#include <psp2/ime_dialog.h>
#include <psp2/common_dialog.h>
#include <psp2/libime.h>

namespace TFE_VitaKeyboard
{
	enum { MAX_TEXT = 64 };

	static bool s_active = false;
	static SceWChar16 s_title[MAX_TEXT];
	static SceWChar16 s_initialText[MAX_TEXT];
	static SceWChar16 s_inputText[MAX_TEXT + 1];

	static void asciiToUtf16(const char* src, SceWChar16* dst, u32 dstCount)
	{
		u32 i = 0;
		if (src)
		{
			for (; src[i] && i < dstCount - 1; i++) { dst[i] = (SceWChar16)(u8)src[i]; }
		}
		dst[i] = 0;
	}

	bool open(const char* title, const char* initialText, u32 maxLen)
	{
		if (s_active) { return true; }
		if (maxLen == 0 || maxLen > MAX_TEXT) { maxLen = MAX_TEXT; }

		asciiToUtf16(title, s_title, MAX_TEXT);
		asciiToUtf16(initialText, s_initialText, MAX_TEXT);
		memset(s_inputText, 0, sizeof(s_inputText));

		SceImeDialogParam param;
		sceImeDialogParamInit(&param);
		param.supportedLanguages = SCE_IME_LANGUAGE_ENGLISH;
		param.languagesForced = SCE_FALSE;
		param.type = SCE_IME_TYPE_BASIC_LATIN;
		param.option = 0;
		param.dialogMode = SCE_IME_DIALOG_DIALOG_MODE_WITH_CANCEL;
		param.textBoxMode = SCE_IME_DIALOG_TEXTBOX_MODE_WITH_CLEAR;
		param.title = s_title;
		param.maxTextLength = maxLen;
		param.initialText = s_initialText;
		param.inputTextBuffer = s_inputText;

		const SceInt32 res = sceImeDialogInit(&param);
		if (res < 0)
		{
			TFE_System::logWrite(LOG_ERROR, "VitaKeyboard", "sceImeDialogInit failed: 0x%08x", (u32)res);
			return false;
		}
		s_active = true;
		return true;
	}

	Status update(char* output, u32 outputSize)
	{
		if (!s_active) { return VKB_IDLE; }

		const SceCommonDialogStatus status = sceImeDialogGetStatus();
		if (status == SCE_COMMON_DIALOG_STATUS_RUNNING) { return VKB_RUNNING; }
		if (status != SCE_COMMON_DIALOG_STATUS_FINISHED)
		{
			// Dialog vanished (e.g. terminated by the system) - treat as a cancel.
			s_active = false;
			return VKB_CANCELED;
		}

		SceImeDialogResult result;
		memset(&result, 0, sizeof(result));
		sceImeDialogGetResult(&result);
		sceImeDialogTerm();
		s_active = false;

		if (result.button != SCE_IME_DIALOG_BUTTON_ENTER)
		{
			return VKB_CANCELED;
		}

		// The Dark Forces fonts only have printable ASCII, drop anything else.
		u32 o = 0;
		for (u32 i = 0; s_inputText[i] && o + 1 < outputSize; i++)
		{
			const SceWChar16 c = s_inputText[i];
			if (c >= 0x20 && c < 0x7f) { output[o++] = (char)c; }
		}
		if (outputSize) { output[o] = 0; }
		return VKB_ACCEPTED;
	}

	bool isActive()
	{
		return s_active;
	}
}

#else

namespace TFE_VitaKeyboard
{
	bool open(const char*, const char*, u32) { return false; }
	Status update(char*, u32) { return VKB_IDLE; }
	bool isActive() { return false; }
}

#endif
