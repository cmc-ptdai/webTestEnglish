import React, { useState } from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setQuestionExamTest as setQuestionExamTestAction} from '../../../redux/actions/questionAction'
import { Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} chưa điền!',
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
    console.log(values);
  };

  const setListExamTest = () => {
    dispatch(setQuestionExamTestAction(examTest))
  }

  const initialState = [
    {name: 'time', label: 'thời gian làm bài',},
    {name: 'questions', label: 'Dạng đúng sai', score: 'questions'},
    {name: 'formFillOut', label: 'Dạng điền vào chỗ trống', score: 'formFillOut'},
    {name: 'changesentence', label: 'Dạng viết lại câu', score: 'changesentence'},
    {name: 'listening', label: 'Dạng câu hỏi nghe', score: 'qlisteningestions'},
    {name: 'synonyms', label: 'câu hỏi tìm từ', score: 'synonyms'},
    {name: 'readandanswer', label: 'câu hỏi đọc hiểu', score: 'readandanswer'},
    {name: 'selectasuitableword', label: 'câu hỏi chọn từ', score: 'selectasuitableword'},
  ]
  const level = [
    {name: 'Lơp 1', value: "1"},
    {name: 'Lơp 2', value: "2"},
    {name: 'Lơp 3', value: "3"},
    {name: 'Lơp 4', value: "4"},
    {name: 'Lơp 5', value: "5"},
    {name: 'Lơp 6', value: "6"},
    {name: 'Lơp 7', value: "7"},
    {name: 'Lơp 8', value: "8"},
    {name: 'Lơp 9', value: "9"},
    {name: 'Lơp 10', value: "10"},
    {name: 'Lơp 11', value: "11"},
    {name: 'Lơp 12', value: "12"}
  ]
  const difficult = [
    {name: "Dễ", value: '1'},
    {name: "Trung bình", value: '2'},
    {name: "Khó", value: '3'},
  ]
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
              <Input/>

            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['level']}
              label="độ khó"
              rules={[{ required: true }]}
            >
              <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              {
                difficult.map((item, index) => {
                  return (
                    <Option value={item.value} key={index}>{item.name}</Option>
                  )
                })
              }
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['class']}
              label="Lớp"
              rules={[{ required: true }]}
            >
              <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              {
                level.map((item, index) => {
                  return (
                    <Option value={item.value} key={index}>{item.name}</Option>
                  )
                })
              }
              </Select>
            </Form.Item>
          </Col>
          {
            initialState.map((item, index) => {
              return (
                <Col span={12} key={index}>
                  <Form.Item
                    name={[item.name]}
                    label={[item.label]}
                    rules={[{ type: 'number', min: 0, max: 15, required: true }]}
                  >
                    <InputNumber/>
                  </Form.Item>

                </Col>
              )
            })
          }
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" danger onClick={setListExamTest} >
              Test đề
            </Button>
          </Form.Item>
        </Link>
      </div>
    </>
  );
}

export default CreateExam;
