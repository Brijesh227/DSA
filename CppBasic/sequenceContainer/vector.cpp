#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> arr;
    vector<int> v(5,1);

    for(int i: v){ // if type is not known then use auto
        cout << "stl arr" << i << endl; // 1 1 1 1 1
    }

    arr.push_back(2);
    arr.push_back(3);
    arr.push_back(4);
    for(int i=0;i<arr.size();++i){
        cout << "stl arr" << arr[i] << endl;
    }
    for(int i: arr){ // if type is not known then use auto
        cout << "stl arr" << i << endl;
    }
    cout << "first" << arr.front() << endl;
    cout << "last" << arr.back() << endl;;
    cout << "at pos 2" << arr.at(2) << endl;
    arr.pop_back();
    for(int i=0;i<arr.size();++i){
        cout << "stl arr" << arr[i] << endl;
    }
    arr.erase(arr.begin(),arr.begin()+2);
    return 0;
}
