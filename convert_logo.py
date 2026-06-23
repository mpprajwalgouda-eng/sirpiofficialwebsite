from PIL import Image

def make_transparent():
    # Load the image
    img_path = r"c:\Users\mppra\OneDrive\Desktop\Sirpiii\frontend\public\logo\sirpi-logo-white.png"
    out_path = r"c:\Users\mppra\OneDrive\Desktop\Sirpiii\frontend\public\logo\sirpi-logo-white-transparent.png"
    
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            # Use the max of RGB as the alpha to maintain white logo on dark background gracefully
            brightness = max(item[0], item[1], item[2])
            # Set pixel to solid white, but with the calculated alpha
            new_data.append((255, 255, 255, brightness))
            
        img.putdata(new_data)
        img.save(out_path, "PNG")
        print("Logo converted successfully!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_transparent()
