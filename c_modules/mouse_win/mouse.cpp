#include <node.h>
#include <windows.h>
#include <iostream>
using namespace v8;
using namespace std;
Handle<Value> text(const Arguments& args) {
  HandleScope scope;
  mouse_event(MOUSEEVENTF_MOVE, 50, 50, 50, 50);
  return scope.Close(String::New("fire mouse event"));
}

void init(Handle<Object> target) {
  NODE_SET_METHOD(target, "text", text);
}

NODE_MODULE(mouse, init)
