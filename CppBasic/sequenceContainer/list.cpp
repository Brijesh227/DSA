// doubly linked list

#include<iostream>
#include<list>
using namespace std;

int main(){
    list<int> ls;
    ls.push_back(2);
    ls.push_front(3);
    ls.push_back(4);
    for(int i: ls){ // if type is not known then use auto
        cout << "stl ls" << i << endl;
    }
    cout << "first" << ls.front() << endl;
    cout << "last" << ls.back() << endl;;
    cout << "at pos 2" << ls.at(2) << endl;
    ls.pop_back();
    for(int i=0;i<ls.size();++i){
        cout << "stl ls" << ls[i] << endl;
    }
    ls.erase(ls.begin(),ls.begin()+2);
    return 0;
}
