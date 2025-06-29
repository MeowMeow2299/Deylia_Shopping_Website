// UserProfile.jsx (sử dụng fetch)
import React, { useEffect, useState } from 'react';
import "./UserProfile.scss";
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user/profile')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Không thể lấy thông tin người dùng');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Lỗi khi fetch profile:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu nè, đừng hối nữa bà 😂</div>;
  }

  if (!user) {
    return <div>Không tìm thấy thông tin người dùng nha 😅</div>;
  }

  return (
    <div className="profile-container">
      <h2>Thông tin của {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>SĐT:</strong> {user.phone || 'Không có'}</p>
      <p><strong>Địa chỉ:</strong> {user.address || 'Chưa cập nhật'}</p>
    </div>
  );
};

export default UserProfile;