# Timer Extension

A Chrome extension that provides a customizable timer with notifications and user preferences.

## Features

- **Timer Display**: Shows current time and elapsed timer seconds
- **Timer Controls**: Start, stop, and reset the timer
- **Customizable Notifications**: Set your preferred notification interval
- **User Preferences**: Save your name and notification settings
- **Badge Display**: Shows current timer count on extension icon
- **Background Timer**: Runs continuously using Chrome alarms API

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The Timer Extension will appear in your extensions list

## Usage

### Popup Interface
- Click the extension icon to open the popup
- View current time and timer count
- Use Start/Stop/Reset buttons to control the timer
- See your personalized name if configured

### Options Page
- Right-click the extension icon and select "Options"
- Enter your name for personalized display
- Set notification interval in seconds (default: 1000)
- Click "Save Options" to apply changes

### Notifications
- Receive notifications at your configured interval
- Notifications show elapsed time
- Extension icon appears in notifications

## Files Structure

```
timer-extension/
  manifest.json        # Extension configuration
  popup.html          # Main popup interface
  popup.css           # Popup styling
  popup.js            # Popup functionality
  options.html        # Settings page
  options.css         # Options styling
  options.js          # Settings functionality
  background.js       # Background service worker
  icon.png           # Extension icon
```

## Permissions

- **storage**: Save user preferences and timer state
- **alarms**: Reliable background timing
- **notifications**: Send timer notifications

## Technical Details

- Uses Manifest V3 for modern Chrome extensions
- Implements Chrome alarms API for reliable background timing
- Stores data in both local and sync storage
- Service worker runs in background for timer functionality
- Responsive popup interface with real-time updates

## Default Settings

- Notification interval: 1000 seconds
- Timer state: Automatically saved
- Badge text: Shows current timer count
- Default name: "???" (when not set)

## Development

To modify or extend this extension:

1. Edit the relevant files in the extension directory
2. Go to `chrome://extensions/`
3. Click the reload button for the Timer Extension
4. Test changes immediately

## Browser Compatibility

- Chrome (Manifest V3 compatible)
- Edge (Chromium-based)
- Other Chromium-based browsers

## License

This project is open source and available under the MIT License.
