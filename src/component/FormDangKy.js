import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormDangKy extends Component {

    state = {
        values:{
            taiKhoan:'',
            matKhau:'',
            email:'',
            hoTen:'',
            soDienThoai:'',
            maLoaiNguoiDung:'',
        },
        errors: {
            taiKhoan:'',
            matKhau:'',
            email:'',
            hoTen:'',
            soDienThoai:'',
            maLoaiNguoiDung:'',
        }
    }


    handleChangeInput = (event) => {
        let {value,name} = event.target;

        let newValues = {...this.props.nguoiDung.values};
        newValues[name] = value;

        let attrValue = '';
        let regex;
        if(event.target.getAttribute('typeEmail')){
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }


        let newErrors = {...this.props.nguoiDung.errors};
        let messageError = '';
        if(value.trim() === ''){
            messageError = name + ' không được bỏ trống!';
        }

        if(regex){
            if(attrValue === 'email'){
                if(!regex.test(value)){
                    messageError = name + ' phải đúng định dạng!';
                }
            }
        }
        newErrors[name] = messageError;
        
     
        this.props.dispatch({
            type: 'HANDLE_CHANGE_INPUT',
            nguoiDung: {
                values: newValues,
                errors: newErrors
            }
        })
    }


    handleSubmit = (event) => {
        // Cản sự kiện submit browser
        event.preventDefault();
        console.log('state',this.state)

        let valid = true;

        for( let key in this.state.errors){
            if(this.state.errors[key] !== ''){
                valid = false;
                break;
            }
        }

        for (let key in this.state.values){
            if(this.state.values[key] === ''){
                valid = false;
                break;
            }
        }

        if(!valid){
            alert('Dữ liệu không hợp lệ')
            return;
        }

        const action = {
            type: 'THEM_NGUOI_DUNG',
            nguoiDung: this.state.values
        }
        this.props.dispatch(action)
    }

    render() {

        let {taiKhoan,hoTen,matKhau,email,maLoaiNguoiDung,soDienThoai} = this.props.nguoiDung.values
        return (
            <form className="card mt-5" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-white">
                    Form đăng ký
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p> Tài khoản</p>
                                <input value={taiKhoan} className="form-control" name="taiKhoan" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className="form-group">
                                <p> Mật khẩu</p>
                                <input value={matKhau} className="form-control" name="matKhau" type="password" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.matKhau}</p>
                            </div>
                            <div className="form-group">
                                <p> Email</p>
                                <input value={email} typeEmail="email" className="form-control" name="email" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p> Họ tên</p>
                                <input value={hoTen} className="form-control" name="hoTen" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.hoTen}</p>
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input value={soDienThoai} className="form-control" name="soDienThoai" type="soDienThoai" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <p> Mã người dùng</p>
                                <select value={maLoaiNguoiDung}  className="form-control" name="maLoaiNguoiDung" onChange={this.handleChangeInput}>
                                    <option value="KhanhHang">Khách hàng</option>
                                    <option value="QuanTri">Quản trị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-left"> 
                    <button className="btn btn-outline-success mr-3" type="submit">Đăng ký</button>
                    <button className="btn btn-outline-primary" type="button" onClick={()=> {
                        const action = {
                            type: 'CAP_NHAT_NGUOI_DUNG',
                            nguoiDungCapNhat: this.props.nguoiDung.values
                        }
                        this.props.dispatch(action)
                    }}>Cập nhật</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        sinhVienChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
        nguoiDung: state.baiTapQuanLyNguoiDungReducer.nguoiDung
    }
}

export default connect (mapStateToProps)(FormDangKy);