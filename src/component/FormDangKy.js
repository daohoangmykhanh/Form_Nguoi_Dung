import React, { Component } from 'react'

export default class FormDangKy extends Component {
    render() {
        return (
            <form className="card mt-5">
                <div className="card-header bg-dark text-white">
                    Form đăng ký
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p> Tài khoản</p>
                                <input className="form-control" name="taiKhoan"/>
                            </div>
                            <div className="form-group">
                                <p> Mật khẩu</p>
                                <input className="form-control" name="mauKhau" type="password"/>
                            </div>
                            <div className="form-group">
                                <p> Email</p>
                                <input className="form-control" name="email"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p> Họ tên</p>
                                <input className="form-control" name="hoTen"/>
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control" name="taiKhoan" type="soDienThoai"/>
                            </div>
                            <div className="form-group">
                                <p> Mã người dùng</p>
                                <select className="form-control" name="maLoaiNguoiDung">
                                    <option value="KhanhHang">Khách hàng</option>
                                    <option value="QuanTri">Quản trị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-left"> 
                    <button className="btn btn-outline-success mr-3" type="submit">Đăng ký</button>
                    <button className="btn btn-outline-primary">Cập nhật</button>
                </div>
            </form>
        )
    }
}
