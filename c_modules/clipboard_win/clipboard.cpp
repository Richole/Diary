#include <node.h>
#include <windows.h>
#include <iostream>
using namespace v8;
using namespace std;
Handle<Value> text(const Arguments& args) {
 HandleScope scope;
 //if (IsClipboardFormatAvailable(CF_UNICODETEXT)) //判断某种格式的数据是否可用
 LPCTSTR lpStr;
 if(OpenClipboard(NULL)){
     UINT uiFormat = (sizeof(TCHAR) == sizeof(WCHAR))?CF_UNICODETEXT:CF_TEXT;

     ////执行成功，返回数据句柄，否则返回NULL。参数：1.数据格式，2.指定格式的数据的句柄
     HGLOBAL hMem = GetClipboardData(uiFormat);

     if (hMem != NULL)
     {
         //获取UNICODE的字符串。
         lpStr = (LPCTSTR)GlobalLock(hMem);
         if (lpStr != NULL)
         {
             cout<<(LPCTSTR)lpStr<<endl;
         }
         GlobalUnlock(hMem);
     }
 }
 CloseClipboard();
 return scope.Close(String::New("copy clipboard"));
}

void init(Handle<Object> target) {
 NODE_SET_METHOD(target, "text", text);
}

NODE_MODULE(clipboard, init)
