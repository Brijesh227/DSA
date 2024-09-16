// behind the scene implement bst
// repeted element not allowed
// return sorted
// do not modify

#include<iostream>
#include<set>
using namespace std;

int main(){
    set<int> st;
    st.insert(4);
    st.insert(3);
    st.insert(2);
    st.insert(3); // O(logn)

    for(auto i: st) { 
        cout << "set" << i << endl;
    } // 2 3 4
    
    set<int>::iterator it = st.begin();
    st.erase(it);
    cout << "5 is present" << st.count(5);

    set<int>::iterator itr = st.find(5);
    cout << "value at itr" << *itr;
    return 0;
}
