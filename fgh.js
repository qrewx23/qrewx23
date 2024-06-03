  # 将图像分成上下两段
    height = img.shape[0]
    half_height = height // 2
    upper_img = img[:half_height, :]
    lower_img = img[half_height:, :]

    # 对上半部分进行预测
    upper_img = Image.fromarray(upper_img)
    upper_image = upper_img.convert('L')
    upper_image = transformer(upper_image)
    if torch.cuda.is_available():
        upper_image = upper_image.cuda()
    upper_image = upper_image.view(1, *upper_image.size())
    upper_image = Variable(upper_image)

    model.eval()
    upper_preds = model(upper_image)

    _, upper_preds = upper_preds.max(2)
    upper_preds = upper_preds.transpose(1, 0).contiguous().view(-1)

    upper_preds_size = Variable(torch.IntTensor([upper_preds.size(0)]))
    upper_raw_pred = converter.decode(upper_preds.data, upper_preds_size.data, raw=True)
    upper_sim_pred = converter.decode(upper_preds.data, upper_preds_size.data, raw=False)
    print('Upper prediction: %-20s => %-20s' % (upper_raw_pred, upper_sim_pred))

    # 对下半部分进行预测
    lower_img = Image.fromarray(lower_img)
    lower_image = lower_img.convert('L')
    lower_image = transformer(lower_image)
    if torch.cuda.is_available():
        lower_image = lower_image.cuda()
    lower_image = lower_image.view(1, *lower_image.size())
    lower_image = Variable(lower_image)

    lower_preds = model(lower_image)

    _, lower_preds = lower_preds.max(2)
    lower_preds = lower_preds.transpose(1, 0).contiguous().view(-1)

    lower_preds_size = Variable(torch.IntTensor([lower_preds.size(0)]))
    lower_raw_pred = converter.decode(lower_preds.data, lower_preds_size.data, raw=True)
    lower_sim_pred = converter.decode(lower_preds.data, lower_preds_size.data, raw=False)
    print('Lower prediction: %-20s => %-20s' % (lower_raw_pred, lower_sim_pred))
    words = upper_sim_pred + "\n" + lower_sim_pred

