from PIL import Image

def make_white_transparent(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(img_path, "PNG")

make_white_transparent(r'C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\public\tokenomics.png')
