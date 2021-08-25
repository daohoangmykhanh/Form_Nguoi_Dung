const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'nguyenvana',
        hoTen: 'Nguyễn Văn A',
        matKhau: '123456789', 
        email:'nguyenvana@gmail.com', 
        soDienThoai: '0548169434',
        loaiNguoiDung: 'Khách Hàng'},
        {taiKhoan:'nguyenvanb',
        hoTen: 'Nguyễn Văn B',
        matKhau: '485615', 
        email:'nguyenvanb@gmail.com', 
        soDienThoai: '0478945136',
        loaiNguoiDung: 'Khách Hàng'},
    ]
}

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type){

        case 'THEM_NGUOI_DUNG':{
            state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung]
            return {...state};
        }

        default: return state;
    }
}

