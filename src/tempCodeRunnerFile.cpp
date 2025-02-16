#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        //spaces
        for(int j=(n-i-1);j>i;j--){
            cout<<" ";
        }
        // //stars
        // for(int j=(2*i)+1;j>0;j++){
        //     cout<<"*";
        // }
        // //spaces
        //   for(int j=(n-i-1);j>i;j--){
        //     cout<<" ";
        // }
        cout<<endl;
    }
}