// iterative and recursive approach
// complexity - O(logn)

#include <iostream>

using namespace std;

int bst(int* arr,int f,int n){
    int start{0};
    int end{n};
    
    for(int i=start;i<end;++i) {
        int mid{(start+end)/2};
        
        if(f == arr[mid]){
            return i;
        } else if(f < arr[mid]){
            end = mid;
        } else {
            start = mid;
        }
    }
    return 0;
}

int recBST(int* arr,int start,int end,int f){
    int mid{(start+end)/2};
    if(f == arr[mid]){
        return mid;
    } else if(f < arr[mid]){
        return recBST(arr,start,mid,f);
    } else {
        return recBST(arr,mid,end,f);
    }
}

int main()
{
    int arr[7]{10,20,30,50,60,80,110};
    int n = 20;
    cout << "element foud at " << bst(arr,n,7) << "\n";
    cout << "element foud rec at " << recBST(arr,0,7,n) << "\n";
    return 0;
}