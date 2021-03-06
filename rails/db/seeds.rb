environment_seed_file = File.join(Rails.root, 'db', 'seeds', "#{Rails.env}.rb")

def seed_image(file_name)
  File.open(File.join(Rails.root, "/lib/assets/thriftImages/#{file_name}.jpg"))
end

Spot.create(name: "Workshop Vintage", location: "4011 North Williams Avenue
Portland, OR 97227", phone: "(971) 319-2367", kind: "Thrift", price_range: "$$", style: "Vintage, Consignment, Accessories", hours: "Mon-Fri 11:00am-6:00pm, Sat 10:00am-6:00pm, Sun 10:00am-5:00pm", card: true , dates: nil, image_url: seed_image("workshopvintage") )

Spot.create(name: "Village Merchants", location: "4035 SE Division St
Portland, OR 97202", phone: "(503) 234-6343", kind: "Thrift", price_range: "$", style: "A little o' eerything", hours: "Mon-Sat 10:00am-7:00pm, Sun 10:00am-6:00pm", card: true, dates: nil, image_url: seed_image("villagemerchants") )

Spot.create(name: "Red Fox Vintage", location: "3014 NE Killingsworth Portland, OR 97211", phone: "(503) 206-4540", kind: "Thrift", price_range: "$$", style: "Antiques, Accessories, Fun Clothes", hours: "Mon-Sun 11:00am-6:00pm", card: true , dates: nil, image_url: seed_image("theredfox") )

Spot.create(name: "Rerun", location: "707 NE Fremont St Portland, OR 97212", phone: "(503) 517-3786", kind: "Thrift", price_range: "$", style: "Vintage Home Decor and Apparel", hours: "Tues CLOSED Mon, Wed-Sat 10:30am-6:30pm, Sun 11:00am-5:00pm", card: true , dates: nil, image_url: seed_image("rerun"))

Spot.create(name: "Animal Traffic", location: "4000 N Mississippi Ave
Portland, OR 97227", phone: "(503)249-4000", kind: "Thrift", price_range: "$$", style: "Flannels, Vintage, Local Artisan Crafts", hours: "Sun-Thurs 11:00am-6:00pm, Fri-Sat 11:00am-7:00pm", card: true, dates: nil, image_url: seed_image("animaltraffic") )

Spot.create(name: "Modo Boutique", location: "729 E Burnside St Ste 103 Portland, OR 97214", phone: "(503)232-3056", kind: "Thrift", price_range: "$$", style: "Designer consignment, super cute!", hours: "Mon-Sun 11:00am-6:00pm", card: true, dates: nil, image_url: seed_image("modoboutique") )

Spot.create(name: "Adorned In Grace", location: "4949 SW 76th Ave
Portland, OR 97225", phone: "(971) 244-1583", kind: "Thrift", price_range: "$", style: "Bridal Consignment", hours: "Sun-Mon CLOSED, Tues-Fri 1:00pm-5:00pm, Sat 10:00am-5:00pm", card: true , dates: nil, image_url: seed_image("adornedingrace") )


Spot.create(name: "Annie May's Garage Sale", location: "3434 SE 45th Ave
Portland, OR 97206", phone: "(971) 555-5555", kind: "Yard Sale", price_range: "$", style: "Vintage Fun!", hours: "Sat-Sun 10-5", card: false , dates: "5/2/2015-5/3/2015", image_url: seed_image("adornedingrace") )


Spot.create(name: "Billy Bob's Moving Sale", location: "2055 Canal Drive
Portland, OR 97225", phone: "(971) 555-5555", kind: "Yard Sale", price_range: "$", style: "All House Items, EVERYTHING MUST GO", hours: "Thur-Sun 10:00am-6:00pm", card: false , dates: "5/21/2015-5/24/2015", image_url: seed_image("adornedingrace") )


Spot.create(name: "The Tweeble's Estate Sale", location: "15th and Knott, NE Portland, OR", phone: "(971) 444-4444", kind: "Estate Sale", price_range: "$$", style: "Everything Under The Sun", hours: "10:00am-5:00pm", card: true , dates: "Monday 5/11 - Sunday 5/17", image_url: seed_image("adornedingrace") )
