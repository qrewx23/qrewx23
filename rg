  # 判断弹出框是否存在
        while(True):
            try:
                # 检测是否存在弹出框
                alert = driver.switch_to.alert
                time.sleep(0.5)
            except:
                # 如果抛异常，说明当前页面不存在弹出框，即用户点击了取消或者确定
                break


        # 获取用户输入的链接地址
        target_url = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, random_id)))
        value = target_url.get_attribute('value')
        # 删除空格
        value = value.strip()


        # 判断输入的链接地址是否正确
        if( value != '' and 'https://chushu.la' in value):
            break
