---
path: wxpython
date: 2021-01-21T14:21:13.317Z
title: wxpython menubar
description: about the menubar of wxpython
---
```python
class FrameWithForms(wx.Frame):
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

        """ create controls """
        #  fileMenu
        self.newItem = wx.MenuItem(fileMenu, wx.ID_NEW, 'New')
        self.copyItem = wx.MenuItem(editMenu, wx.ID_COPY, 'Copy', 'COPY')
        self.cutItem = wx.MenuItem(editMenu, wx.ID_CUT, 'Cut', 'CUT')
        self.pasteItem = wx.MenuItem(editMenu, wx.ID_CUT, 'Paste', 'PASTE')
        self.radio1 = wx.MenuItem(fileMenu, wx.ID_ANY, 'Radio1', kind=wx.ITEM_RADIO)
        self.radio2 = wx.MenuItem(fileMenu, wx.ID_ANY, 'Radio2', kind=wx.ITEM_RADIO)
        self.chekable1 = wx.MenuItem(fileMenu, wx.ID_ANY, 'Checkable1', kind=wx.ITEM_CHECK)
        self.chekable2 = wx.MenuItem(fileMenu, wx.ID_ANY, 'Checkable2', kind=wx.ITEM_CHECK)
        self.quit = wx.MenuItem(fileMenu, wx.ID_EXIT, '&Quit\tCtrl+Q')

        #  second_fileMenu
        self.chekable3 = wx.MenuItem(second_fileMenu, wx.ID_ANY, 'Checkable2', kind=wx.ITEM_CHECK)

        """ set controls to the menuber """
        for (parent_menu, control, *kwargs) in [
            (fileMenu, self.newItem, ('img', FILE_PATH + 'new.png')),
            (fileMenu, 'separator'),
            (editMenu, self.copyItem, ('img', FILE_PATH + 'copy.png')),
            (editMenu, self.cutItem, ('img', FILE_PATH + 'cut.png')),
            (editMenu, self.pasteItem, ('img', FILE_PATH + 'paste.png')),
            (fileMenu, 'submenu', ('submenu', editMenu), ('txt', 'edit'), ('help_txt', 'EDIT')),
            (fileMenu, 'separator'),
            (fileMenu, self.radio1),
            (fileMenu, self.radio2),
            (fileMenu, 'separator'),
            (fileMenu, self.chekable1),
            (fileMenu, self.chekable2),
            (fileMenu, self.quit),
            (second_fileMenu, self.chekable3)
        ]:
            kwargs = dict(kwargs)
            if(control == 'separator'):
                parent_menu.AppendSeparator()
            elif(control == 'submenu'):
                parent_menu.AppendSubMenu(submenu=kwargs['submenu'], text=kwargs['txt'], help=kwargs['help_txt'])
            else:
                if(kwargs.get('img')):
                    control.SetBitmap(wx.Bitmap(kwargs['img'], wx.BITMAP_TYPE_ANY))
                parent_menu.Append(control)

        self.SetMenuBar(menubar)

        """ bindEvents """
        for control, event, handler in [
            (self.newItem, wx.EVT_MENU, self.printparam),
            (self.copyItem, wx.EVT_MENU, self.printparam)
        ]:
            self.Bind(event, handler, control)


    def printparam(self, event):
        eventObject = event.GetEventObject()
        print(f"GetEventObject : {eventObject}")

```