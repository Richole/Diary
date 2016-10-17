#include <node.h>
#include <windows.h>
#include <iostream>
using namespace v8;
using namespace std;
Handle<Value> hide(const Arguments& args) {
 HandleScope scope;
 ShowWindow(GetConsoleWindow(), SW_HIDE);
 return scope.Close(String::New("Hello world!"));
}

void init(Handle<Object> target) {
 NODE_SET_METHOD(target, "hide", hide);
}

NODE_MODULE(console_hide, init)
