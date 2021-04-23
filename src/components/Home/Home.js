import React, {Component} from 'react';
import logo from '../../Image/chay.gif';
import logo2 from '../../Image/2.jpg';
import logo9 from '../../Image/9.gif';
export default class Home extends Component {
    render() {
        const WIDTH = document.documentElement.clientWidth;
        return (
            <div
                style={{
                border: 'solid',
                borderRadius: 8,
                width: {
                    WIDTH
                },
                margin: 10,
                padding: 5
            }}>
                <h2>Giới thiệu sản phẩm</h2>
                <h4>
                    Hiện tại mã nguồn chưa công khai{' '}
                    <a href="https://github.com/justadudewhohacks/face-api.js">
                        github
                    </a>{' '}
                    (Dự án có áp dụng nhiều công nghệ máy học tân tiến)
                </h4>
                <img src={logo} alt="example" width="350"/>
                <img src={logo2} alt="example" width="350"/>
                <img src={logo9} alt="example" width="380"/>
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    margin: 'auto',
                    marginLeft: 10
                }}>
                    <h3>Cách sử dụng</h3>
                    <p>
                        sản phẩm sử dụng những công nghệ thông minh mới nhất để bóc tách dữ
                        liệu ra nhanh chóng. Với đầu vào không quá nhập nhằng. Ngày nay chỉ
                        cần đưa vào là nhận diện thành công
                    </p>
                    <div>
                        <ul>
                            <h4>yêu cầu tối thiểu:</h4>
                            <li>
                                Hỗ trợ bất kỳ trình duyệt PC nào có bật Javascript (Chrome, IE,Safari)
                            </li>
                            <li>Hỗ trợ điện thoại Android để nhập ảnh và máy ảnh video</li>
                            <li>Chỉ hỗ trợ Iphone trên Safari và Chrome cho Nhập ảnh</li>
                            <li>Không hỗ trợ điện thoại thông minh cũ hơn (chẳng hạn như Iphone4)</li>
                        </ul>
                        <ul>
                            <h4>Hình ảnh đầu vào:</h4>
                            <li>Hình ảnh đầu vào có thể là tệp hình ảnh hoặc URL</li>
                            <li>Tệp hình ảnh phải có định dạng jpg, jpeg hoặc png</li>
                            <li>
                                Máy chủ lưu trữ URL hình ảnh phải cho phép các yêu cầu nguồn gốc chéo (CORS)
                                hoặc các yêu cầu khác Ứng dụng sẽ không thể truy cập hình ảnh. (bất kỳ facebook
                                nào hình ảnh tốt để thử nghiệm với ứng dụng này)
                            </li>
                            <li>
                                Ứng dụng sẽ cố gắng phát hiện tất cả các khuôn mặt, có thể mất một vài giây phụ
                                thuộc vào số lượng khuôn mặt trong hình ảnh.
                            </li>
                            <li>
                                Có thể khó nhận diện khuôn mặt nếu mặt đối tượng bị nghiêng, quá lớn hoặc quá
                                nhỏ và / hoặc khuôn mặt bị mờ.
                            </li>
                            <li>
                                Ứng dụng có thể nhận ra thành viên sai nếu khuôn mặt của họ nhìn tương tự, hoặc
                                mặt đối tượng không nhìn thẳng vào máy ảnh.
                            </li>
                            <li>
                                Ứng dụng này có thể không hoạt động tốt đối với điện thoại thông minh cũ hơn
                                hoặc một số các trình duyệt. (Tôi thấy Iphone4 của mình không thể xử lý phát
                                hiện đúng cách, trong khi iphone7 hoặc 8 đang hoạt động tốt.)
                            </li>
                        </ul>
                        <ul>
                            <h4>Yêu cầu webcam:</h4>
                            <li>
                                Đầu vào Video hoạt động tốt với webcam PC hoặc camera của điện thoại Android.
                            </li>
                            <li>
                                Hiện tại camera của Iphone không được hỗ trợ để phát hiện trực tiếp trong ứng
                                dụng này.
                            </li>
                            <li>
                                Ứng dụng sẽ cố gắng phát hiện và nhận dạng bất kỳ khuôn mặt nào, nhưng hiệu suất
                                phụ thuộc vào CPU của thiết bị.
                            </li>
                            <li>
                                Phát hiện và nhận dạng với webcam PC có thể nhanh chóng, trong khi hoạt động
                                trên điện thoại thông minh có thể chậm hơn.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}
