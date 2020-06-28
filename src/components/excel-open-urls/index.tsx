import React, {useCallback, useState} from 'react'
import { Button, Input, Breadcrumb } from 'antd';
import './style.css'

export default () => {
  const [value, setValue] = useState('')
  const changeHander = useCallback(function (event) {
    setValue(event.target.value)
  }, [])
  const doJump = useCallback(() => {
    const urls = value.split(/\s+/)
    urls.forEach((url, i) => {
      const t = url.indexOf('?') >= 0 ? `&t=${Date.now()}` : `?t=${Date.now()}`
      const ele = document.createElement('a')
      ele.href = url + t
      console.log(url + t)
      ele.target = '_blank'
      document.body.appendChild(ele)
      ele.click()
    })
  }, [value])
  return <div>
    <h2 className={'wife-title'}>功能1:  批量打开 url</h2>
    <div style={{
      padding: '30px'
    }}>
      请宝贝从 excel 全选，复制一下，然后粘贴在下面，再点一下下面的打开按钮
    </div>
    <Input.TextArea
      allowClear
      placeholder={'请宝贝从excel全选，复制吗，然后粘贴在这里\n ' +
      'exp: http://localhost:3000/#/tool\n' +
      'http://localhost:3000/#/tool\n' +
      'http://localhost:3000/#/tool\n' +
      'http://localhost:3000/#/tool\n' +
      'http://localhost:3000/#/tool\n'}

      autoSize={{
        minRows: 5, maxRows: 100
      }}
      value={value}
      onChange={changeHander}></Input.TextArea>

    <Button onClick={doJump} type="primary" block>打开</Button>

    <p style={{
      padding: '30px'
    }}>
      <strong>操作说明： 如果发现没有成功打开多个页面 则查看一下url栏右侧拦截弹窗按钮 选择始终允许</strong>
      <div>
        <img src={require('./lanjie1.png')} alt=""/>

        <div style={{
          padding: '30px'
        }}>1.点击按钮 </div>
        <img src={require('./lanjie.png')} alt=""/>

        <div style={{
          padding: '30px'
        }}> 2. 选择允许 </div>
      </div>
    </p>
  </div>
}
