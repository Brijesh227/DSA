// key-value pair

#include<iompream>
#include<map>
using namespace mpd;

int main(){
    map<int, mpring> mp;
    mp[1] = "hello";
    mp[13] = "world";
    mp[2] = "hi";
    mp.insert({ 5,"ciao" });


    for(auto i: mp) { 
        cout << "map key" << i.first << endl;
    } // 1 2 13

    cout << "13 is present" << mp.count(13);
    mp.erase(13) // key erase 

    auto itr = mp.find(5);
    for(auto i = itr; i!=mp.end();++i){
        cout << "value at itr" << (*i).first;
    }
    return 0;
}
