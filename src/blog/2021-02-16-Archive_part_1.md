---
layout: post
title: Downloading and making an archive searchable with python - Part 1
date: "2021-02-16"
slug: "blog/archive-part-1"
modified: "2020-12-28"
---

A good friend of mine is doing academic research and told me about her frustration with the archive where most of the materials for her research is found. The material consists of PDFs of scanned letters and other texts. However, the material is not made searchable. Each entry does have a short description, but my friend would like to be able to find all entries where a single word is mentioned, and looking through the whole archive every time is a very time consuming task, to say the least.

My immediate thought was that this it would be possible to automate a lot of this process. I decided that I should give my friend a small gift and hopfully spare her of a lot of uneccesary work - as well as doing a fun project that actually has some pactical purpose.

The first step is to download the archive. Appart from my goal to make these PDFs readable, a big additional advantage with downloading the archive is that we become (more) future proof. What if the public access to the archive is removed? In that case we have our own copy of the archive. In fact, this particular archive might loose it's public funding, and who knows what might happen to it after that.

The archive consists of a bit more than 300 PDFs. Not a lot, but it is still a hassle to download them manually. Python to the resque! My first thought was that I could use a web scraping library to find the right links on the webpage and download them. It turns out that the links to the PDFs have a very simple url where each PDF have a entry number that is represented in the URL: `https://{archive url}/pdf/{entrynumber}`.

This makes it very easy to make a script to download all the pdfs. I use the popular [Requests-library](https://requests.readthedocs.io/en/master/).

```Python
import requests

base_url = "http://archiveURL"

for i in range(1, 310):
    url = base_url + str(i)
    print(url)
    response = requests.get(url)
    pdfPath = str(i)+".pdf"
    with open(pdfPath, 'wb') as f:
        f.write(response.content)
```

After 45 minutes or so, all the PDFs (around 5 GB) are downloaded.

That's it for now. This was the easy part. In the next part is where the real magic happens. I will be making the PDFs searchable with OCR (Optical character recognition).
