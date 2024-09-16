#include<iostream>
#include<array>
using namespace std;

int main(){
    int arr[3] = { 1,2,3 };
    int n = sizeof(arr) / sizeof(arr[0]) ;
    array<int,3> arr2;
    for(int i=0;i<n;++i){
        cout << "normal arr" << arr[i] << endl;
    }
    for(int i=0;i<arr2.size();++i){
        cout << "stl arr" << arr2[i] << endl;
    }
    return 0;
}
