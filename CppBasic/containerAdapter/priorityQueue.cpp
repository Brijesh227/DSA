// default max_heap greatest -> lowest 
// max_heap => return max element
// min_heap => return min element

#include<iostream>
#include<queue>
using namespace std;

int main(){
    //max_heap
    priority_queue<int> max;

    //min_heap
    priority_queue<int, vector<int>, greater<int>> min;

    max.push(10);
    max.push(1);
    max.push(7);

    int n = max.size();
    for(int i=0;i<n;++i){
        cout << "ele" << i << ":" << max.top();
        max.pop();
    } // 10 7 1

    min.push(10);
    min.push(1);
    min.push(7);

    int n = min.size();
    for(int i=0;i<n;++i){
        cout << "ele" << i << ":" << min.top();
        min.pop();
    } // 1 7 10

    return 0;
}
