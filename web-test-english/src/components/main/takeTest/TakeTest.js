import react from 'react'
import './style.scss'

const TakeTest = () => {
  return (
    <div className="takeTest">
      <div className="row">
        <div className="col-4 takeTest__left">
          <div className="takeTest__left__information">
            <p className="takeTest__left__information--title">tên đề thi</p>
            <div ><label>Số câu: </label> <span>10</span></div>
            <div ><label>Thời gian: </label> <span>15</span> phút</div>
          </div>
          <div className="takeTest__left__action">
            <button className="takeTest__left__action--save">Lưu đề thi</button>
            <button className="takeTest__left__action--start">Bắt đầu làm</button>
          </div>
          <div className="takeTest__left__shear">
            <p>Chia sẻ lên</p>
            <div>
              <span className="takeTest__left__shear--facebook"><i class="fab fa-facebook-f"></i></span>
              <span className="takeTest__left__shear--twitter"><i class="fab fa-twitter"></i></span>
            </div>
          </div>
        </div>
        <div className="col-8 takeTest__right">
          <div className="takeTest__right__tutorial">
            <div className="takeTest__right__tutorial--title">Hướng dẫn làm bài</div>
            <div className="takeTest__right__tutorial--content">
              <p>Hướng dẫn làm bài thi trắc nghiệm</p>
              <p>1. Đợi đến khi đến thời gian làm bài</p>
              <p>2. CLick vào nút "bắt đầu làm bài" để tiến hành làm bài thi</p>
              <p>3. Ở mỗi câu hỏi , chọn đáp án đúng</p>
              <p>4. Hết thời gian làm bài, hệ thống sẽ tự thu bài. Bạn có thể nộp bài trước khi thời gian kết thúc bằng cách nhấn nút<span className="takeTest__right__tutorial--span">Nộp bài</span></p>
            </div>
          </div>

          <div className="takeTest__right__question">
            <p className="takeTest__right__question--numberQuestion">câu:</p>
            <p className="takeTest__right__question--question">zxzxzxzxzxzx</p>

            <div className="takeTest__right__question--answer">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeTest
