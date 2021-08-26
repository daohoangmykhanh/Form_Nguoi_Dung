const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'nguyenvana',
        hoTen: 'Nguyễn Văn A',
        matKhau: '123456789', 
        email:'nguyenvana@gmail.com', 
        soDienThoai: '0548169434',
        maLoaiNguoiDung: 'KhachHang'},
        {taiKhoan:'nguyenvanb',
        hoTen: 'Nguyễn Văn B',
        matKhau: '485615', 
        email:'nguyenvanb@gmail.com', 
        soDienThoai: '0478945136',
        maLoaiNguoiDung: 'KhachHang'},
    ],
    nguoiDungChinhSua: {
        taiKhoan:'nguyenvana',
        hoTen: 'Nguyễn Văn A',
        matKhau: '123456789', 
        email:'nguyenvana@gmail.com', 
        soDienThoai: '0548169434',
        maLoaiNguoiDung: 'KhachHang'
    },
    nguoiDung: {
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

}

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type){

        case 'THEM_NGUOI_DUNG':{
            state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung]
            return {...state};
        }

        case 'XOA_NGUOI_DUNG':{
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan )];
            return {...state};
        }

        case 'CHINH_SUA' :{
            state.nguoiDung.values = action.nguoiDungChinhSua;
            state.nguoiDung = {...state.nguoiDung}
            return {...state};
        }

        case 'HANDLE_CHANGE_INPUT':{
            state.nguoiDung = action.nguoiDung;
            return {...state};
        }

        case 'CAP_NHAT_NGUOI_DUNG':{
            const mangNguoiDungCapNhat = [...state.mangNguoiDung];

            let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nguoiDung => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
            if (nguoiDungCapNhat){
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
                nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
                nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
                nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
                nguoiDungCapNhat.maLoaiNguoiDung = action.nguoiDungCapNhat.maLoaiNguoiDung;
            }
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return {...state};
        }

        default: return state;
    }
}

