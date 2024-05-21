# 返回 页面访问总时间的URL的数据
def table_data_url_time_rank(history_data):

    # 频率字典
    dict_data = {}

    # 对历史记录文件进行遍历
    for data in history_data:
        url_id = data[0]
        key = url_id

        if (key in dict_data.keys()):
            # 存储url访问时间(小时)，精确到小数点后两位
            dict_data[key][0] += round(data[8]/1000000/3600, 2)
            # 存储url地址
            dict_data[key][1] = data[1]
            # 存储url标题
            dict_data[key][2] = data[2]

        else:
            dict_data[key] = [0.0, '', '']



    # 筛选出前k=10个频率最高的数据
    top_k_dict = get_top_k_from_dict_value_1(dict_data, 100)
    # print(top_k_dict)

    # 返回的table data数据
    table_data = []

    for index, item in enumerate(top_k_dict.items()):
        table_data.append({'id': index+1, 'url': item[1][1], 'title': item[1][2], 'count': item[1][0]})


    return table_data





# 获取历史记录文件中的日期集合
def get_history_date_time(history_data):

    list_date_time = []

    # 对历史记录文件进行遍历
    for data in history_data:
        date_time = data[5]

        # 由于Chrome浏览器在sqlite中存储的时间是以1601-01-01 00:00:00 为起始时间点的微妙计数
        # 与Unix时间戳存在时间间隔，所以需要转换
        unix_time_samp = (date_time / 1000000) - 11644473600

        # 中国以北京时间为准，北京时间为UTC+8小时，8小时=28800秒
        unix_time_samp += 28800

        # 放入list_date_time列表
        list_date_time.append(unix_time_samp)


    # 将时间转化为标准格式
    for i in range(len(list_date_time)):
        unix_time_samp = list_date_time[i]
        list_date_time[i] = time.strftime("%Y-%m-%d", time.gmtime(unix_time_samp))

    # 去重复，set表示集合，集合不可能存在重复元素
    list_unique = list(set(list_date_time))

    # 升序排序
    list_unique_sort = sorted(list_unique)

    # print(list_unique_sort)
    return list_unique_sort
