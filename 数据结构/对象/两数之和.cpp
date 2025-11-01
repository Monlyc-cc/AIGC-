#include<iostream>
#include<vector>
#include<map>
using namespace std;
vector<int> function(vector<int> nums, int target)
{
    map<int,int>mp1; // 使用unordered_map代替map，平均查找时间O(1)
    vector<int> sum;
    // 单次遍历同时完成查找和插入
    for (int i = 0; i < nums.size(); i++)
    {        
        auto it = mp1.find(nums[i]);
        if(it!=mp1.end())
        {
            sum.push_back(mp1[it->second]);
            sum.push_back(i);
            return sum;
        }
        mp1[target-nums[i]]=i;
    }
    return sum;
    
}
int main()
{
    return 0;
}