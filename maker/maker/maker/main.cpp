#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
int main()
{
    string strFolder;
    int totalNumer;
    string introduction;
    string item;
    string totaljson;
    string temp;
    cout << "项目名称:" ;
    cin >> item;
    cout << "介绍:" ;
    cin >> introduction;
    cout << "照片数量" ;
    cin >> totalNumer;
    for (int i = 1; i < totalNumer + 1; i++) {
        temp = "https://gitee.com/tzydh/tzydhpics/" + item + "/raw/master/1 (" + to_string(i) + ").jpg";
        strFolder += "{\"url\":\"" + temp + "\", \"dtl\":\"\" },\n";
    }    
            totaljson = "{\"title\":\"" + item + "\",\n\"intro:\":{\"title\":\"" + item + "\",\"cnt:\":\"" + introduction + "\"},\"pics\":[" + strFolder + "]}";;
                cout << totaljson;   
                cin >> temp;
}

