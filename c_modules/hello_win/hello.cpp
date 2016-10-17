#include <node.h>
#include <windows.h>
#include <iostream>
using namespace v8;
using namespace std;
Handle<Value> Hello(const Arguments& args) {
 HandleScope scope;
 return scope.Close(String::New("Hello world!"));
}

void init(Handle<Object> target) {
 NODE_SET_METHOD(target, "hello", Hello);
}

NODE_MODULE(hello, init)
