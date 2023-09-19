// last in first out

#include<iostream>
#include<stack>
using namespace std;

int main(){
    stack<int> stk;
    stk.push(2);
    stk.push(3);
    stk.push(4);
    
    cout << "top ele" << stk.top();
    stk.pop();
    cout << "size" << stk.size();
    cout << "empty or not" << stk.empty();

    return 0;
}
