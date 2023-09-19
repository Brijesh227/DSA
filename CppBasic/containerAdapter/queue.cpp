// first in first out

#include<iostream>
#include<queue>
using namespace std;

int main(){
    queue<int> qu;
    qu.push(2);
    qu.push(3);
    qu.push(4);
    
    cout << "first ele" << qu.front();
    qu.pop();
    cout << "size" << qu.size();
    cout << "empty or not" << qu.empty();

    return 0;
}
