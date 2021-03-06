---
path: wxpython
date: 2021-01-23T07:35:28.677Z
title: wxpython dialog (modal dialog)
description: about the dialog of wxpython
---
```python
class FrameWithForms(wx.Frame):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.createControls()
        self.bindEvents()
        self.doLayout()

    def doLayout(self):
        pass

    def createControls(self):
        self.btn = wx.Button(self, wx.ID_ANY, 'Show Dialog')
        self.statusbar = self.CreateStatusBar()

    def bindEvents(self):
        for control, event, handler in [
            (self.btn, wx.EVT_BUTTON, self.ShowDialog)
        ]:
            control.Bind(event, handler)

    def ShowDialog(self, event):
        dia = MyDialog(None, id=wx.ID_ANY, title="DialogSample")
        dia.ShowModal()
        dia.Destroy()

```

```python
class MyDialog(wx.Dialog):
    def __init__(self, parent, id, title, *args, **kwargs):
        wx.Dialog.__init__(self, parent, id, title)
        bgcolor = self.random_color()
        self.SetBackgroundColour(bgcolor)
        self.SetTitle(f"{self.GetTitle()} [color: {bgcolor} ]")

    def random_color(self):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        color = (r, g, b)
        return color

```