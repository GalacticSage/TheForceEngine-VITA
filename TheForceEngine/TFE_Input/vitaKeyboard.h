#pragma once
//////////////////////////////////////////////////////////////////////
// PS Vita system keyboard (sceImeDialog).
// Opens the native on-screen keyboard dialog and returns the entered
// text once the player confirms. Only implemented for TFE_VITA builds;
// on other platforms open() always fails and update() returns VKB_IDLE.
//////////////////////////////////////////////////////////////////////
#include <TFE_System/types.h>

namespace TFE_VitaKeyboard
{
	enum Status
	{
		VKB_IDLE = 0,	// No dialog open.
		VKB_RUNNING,	// Dialog is open, the player is typing.
		VKB_ACCEPTED,	// Player pressed Enter - output has been filled in.
		VKB_CANCELED,	// Player closed the dialog without confirming.
	};

	// Open the keyboard dialog. 'initialText' may be null. 'maxLen' is the max number of characters.
	bool open(const char* title, const char* initialText, u32 maxLen);
	// Call once per frame while a dialog may be open. When the dialog finishes, the result is written
	// to 'output' (printable ASCII only, null terminated, at most outputSize - 1 chars) and the dialog is closed.
	Status update(char* output, u32 outputSize);
	bool isActive();
}
