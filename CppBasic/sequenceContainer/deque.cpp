#include<iostream>
#include<deque>
using namespace std;

int main(){
    deque<int> dq;
    dq.push_back(2);
    dq.push_front(1);
    dq.push_back(4);
    for(int i=0;i<dq.size();++i){
        cout << "stl dq" << dq[i] << endl;
    }
    cout << "first" << dq.front() << endl;
    cout << "last" << dq.back() << endl;;
    cout << "at pos 2" << dq.at(2) << endl;

    return 0;
}
