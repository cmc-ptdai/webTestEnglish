import React, { useState } from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setQuestionExamTest as setQuestionExamTestAction} from '../../../redux/actions/questionAction'

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const CreateExam = () => {
  const dispatch = useDispatch()
  const [examTest, setExamTest] = useState('')

  const onFinish = (values) => {
    setExamTest(values)
  };

  const setListExamTest = () => {
    dispatch(setQuestionExamTestAction(examTest))
  }
  return (
    <>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={['name']}
            label="Tên đề bài"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
              name={['time']}
              label="thời gian làm bài"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        <Col span={12}>
          <Form.Item
            name={['questions']}
            label="Dạng đúng sai"
            rules={[{ type: 'number', min: 0, max: 15 ,required: true}]}
          >
            <InputNumber />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name={['formFillOut']}
            label="Dạng điền vào chỗ trống"
            rules={[{ type: 'number', min: 0, max: 15, required: true }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>

          <Col span={12}>
            <Form.Item
              name={['changesentence']}
              label="Dạng viết lại câu"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name={['listening']}
              label="Dạng câu hỏi nghe"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name={['synonyms']}
              label="câu hỏi tìm từ"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name={['readandanswer']}
              label="câu hỏi đọc hiểu"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['selectasuitableword']}
              label="câu hỏi chọn từ"
              rules={[{ type: 'number', min: 0, max: 15, required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={24} >
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
              <Button type="primary" htmlType="submit" >
                Tạo đề
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div style={{display: examTest ? 'block' : 'none'}}>
        <Link to="/examTest">
          <Button type="primary" onClick={setListExamTest}> test đề</Button>
        </Link>
      </div>
    </>
  );
}

export default CreateExam;
