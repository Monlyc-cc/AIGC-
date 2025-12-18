import React, { useState } from 'react'

export default function Control() {
    // input 内拥有onChange事件 传入一个函数
  const [gender, setGender] = useState("male"); // 共享状态

return (
  <div>
    {/* 两个单选框依赖同一个 state，实现“互斥选中”联动 */}
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"} // 状态控制选中状态
        onChange={(e) => setGender(e.target.value)} // 变更同步状态
      />
      男
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"} // 依赖同一个 state
        onChange={(e) => setGender(e.target.value)}
      />
      女
    </label>
  </div>
);
}
