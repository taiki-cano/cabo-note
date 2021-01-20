---
path: wxpython
date: 2021-01-20T07:25:31.361Z
title: wxpython button
description: about the button of wxpython
---
```python
def createControls(self):
    self.btn_1 = wx.Button(
        parent=self, 
        id=wx.ID_ANY, 
        label='button_1',
        pos=wx.DefaultPosition,
        size=wx.DefaultSize,
        validator=wx.DefaultValidator, 
        name='btn_1'
    )
    self.btn_2 = wx.Button(self, -1, 'button_2', name='btn_2')
    
```

```python
def bindEvents(self):
    fot control, event, handler in [
        (self.btn_1, wx.EVT_BUTTON, self.show_param),
        (self.btn_2, wx.EVT_BUTTON, self.show_param),
        (self.btn_3, wx.EVT_BUTTON, self.rewrite_btn_label)
    ]
        control.Bind(event, handler)
        
```

```python
def show_param(self, event):
    eventObject = event.GetEventObject()
    print(f"""
    GetEventObject : { eventObject }
    ID: { eventObject.GetId() }
    Label : { eventObject.GetLabel() }
    GetClassDefaultAttributes : { eventObject.GetClassDefaultAttributes() }
    GetDefaultSize : { eventObject.GetDefaultSize() }
    """)


def rewrite_btn_label(self, event):
    evtObj = event.GetEventObject()
    is_label = 'OFF' if evtObj.GetLabel() == 'ON' else 'ON'
    evtObj.SetLabel(is_label)
```

```python
def doLayout(self):
    hbox = wx.BoxSizer(wx.HORIZONTAL)
    vbox = wx.BoxSizer(wx.VERTICAL)
    vbox.Add(self.btn_1, 0, flag=wx.ALIGN_CENTER)
    vbox.Add(self.btn_2, 0, flag=wx.ALIGN_CENTER | wx.TOP, border=50)
    vbox.Add(self.btn_3, 0, flag=wx.ALIGN_CENTER | wx.TOP, border=50)
    hbox.Add(vbox, 1, flag=wx.ALIGN_CENTER)
    self.SetSizer(hbox)
    
```