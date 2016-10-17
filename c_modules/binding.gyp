{
  "targets": [
    {
      "target_name": "clipboard",
      "sources": ["./clipboard_win/clipboard.cpp"],
      'copies': [
        {
          'destination': './',
          'files': [
            './build/Release/clipboard.node'
          ]
        },
      ]
    },
    {
      "target_name": "hello",
      "sources": ["./hello_win/hello.cpp"],
      'copies': [
        {
          'destination': './',
          'files': [
            './build/Release/hello.node'
          ]
        },
      ]
    },
    {
      "target_name": "mouse",
      "sources": ["./mouse_win/mouse.cpp"],
      'copies': [
        {
          'destination': './',
          'files': [
            './build/Release/mouse.node'
          ]
        },
      ]
    },
    {
      "target_name": "console_hide",
      "sources": ["./console_hide_win/console_hide.cpp"],
      'copies': [
        {
          'destination': './',
          'files': [
            './build/Release/console_hide.node'
          ]
        },
      ]
    }
  ]
}
