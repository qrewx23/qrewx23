# 启动10个线程下载头像
    for i in range(1, 10):
        t = Thread(target=download_head_image,args=(i,))
        t.start()
    print(u'微信好友头像信息获取完毕\n')


    print(u'正在分析好友性别比例，请耐心等待……')
    sex_ratio()
    print(u'分析好友性别比例完毕\n')


    print(u'正在分析好友地区分布，请耐心等待……')
    region_distribution()
    print(u'分析好友地区分布完毕\n')

    print(u'正在统计你认识的好友，请耐心等待……')
    statistics_friends()
    print(u'统计你认识的好友完毕\n')

    print(u'正在分析你最亲密的人，请耐心等待……')
    analyze_remark_name()
    print(u'分析你最亲密的人完毕\n')

    print(u'正在分析你的特殊好友，请耐心等待……')
    analyze_special_friends()
    print(u'分析你的特殊好友完毕\n')

    print(u'正在分析你的好友的个性签名，请耐心等待……')
    analyze_signature()
    print(u'分析你的好友的个性签名完毕\n')

