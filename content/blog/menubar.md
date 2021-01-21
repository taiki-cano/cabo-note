---
path: wxpython
date: 2021-01-21T08:21:03.829Z
title: wxpython menubar
description: setup the menubar of wxpython
---
```python
def __init__(self, *args, **kwargs):
      super().__init__(*args, **kwargs)

      self.SetUpMenuBar()
      FormWithSizer(self)
      self.SetSizeHints(380, 300, -1, -1)
      self.Fit()

def SetUpMenuBar(self):
      menubar = wx.MenuBar()
      fileMenu = wx.Menu()
      second_fileMenu = wx.Menu()
      editMenu = wx.Menu()

      menubar.Append(fileMenu, '&File')
      menubar.Append(second_fileMenu, '&SecondFile')

      def emptyOpsions(num_of_data):
          emptyOption = ['' for _ in range(num_of_data)]
          return tuple(emptyOption)

      for (parentMenu, is_name, id, text, helpString, kind, subMenu, BitmapImg) in [
          (fileMenu, 'newitem', wx.ID_NEW, 'New', 'NewFile', wx.ITEM_NORMAL, None, FILE_PATH + 'new.png'),
          (fileMenu, 'separator') + emptyOpsions(6),
          (editMenu, 'copyItem', wx.ID_COPY, 'Copy', 'COPY', wx.ITEM_NORMAL, None, FILE_PATH + 'copy.png'),
          (editMenu, 'cutItem', wx.ID_CUT, 'Cut', 'CUT', wx.ITEM_NORMAL, None, FILE_PATH + 'cut.png'),
          (editMenu, 'pasteItem', wx.ID_CUT, 'Paste', 'PASTE', wx.ITEM_NORMAL, None, FILE_PATH + 'paste.png'),
          (fileMenu, 'subMenu', wx.ID_ANY, '&Edit', 'EDIT', wx.ITEM_NORMAL, editMenu, None),
          (fileMenu, 'separator') + emptyOpsions(6),
          (fileMenu, 'radio1', wx.ID_ANY, 'Radio1', None, wx.ITEM_RADIO, None, None),
          (fileMenu, 'radio2', wx.ID_ANY, 'Radio2', None, wx.ITEM_RADIO, None, None),
          (fileMenu, 'separator') + emptyOpsions(6),
          (fileMenu, 'chekable1', wx.ID_ANY, 'Checkable1', None, wx.ITEM_CHECK, None, None),
          (fileMenu, 'chekable2', wx.ID_ANY, 'Checkable2', None, wx.ITEM_CHECK, None, None),
          (fileMenu, 'quit', wx.ID_EXIT, '&Quit\tCtrl+Q', None, wx.ITEM_NORMAL, None, None),
          (second_fileMenu, 'chekable', wx.ID_ANY, 'Checkable', None, wx.ITEM_CHECK, None, None)
      ]:
          if(is_name == 'separator'):
              parentMenu.AppendSeparator()
          else:
              if(subMenu):
                  fileMenu.AppendSubMenu(submenu=subMenu, text=text, help=helpString)
              else:
                  is_name = wx.MenuItem(parentMenu, id=id, text=text, kind=kind)
                  if(BitmapImg):
                      is_name.SetBitmap(wx.Bitmap(BitmapImg, wx.BITMAP_TYPE_ANY))
                  parentMenu.Append(is_name)

      self.SetMenuBar(menubar)
      
```