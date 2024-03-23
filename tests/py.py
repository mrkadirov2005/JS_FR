def returnLargestStr(list):
    info={
        "word":"",
        "length":len(list[0])
    }
    for i in list:
        if len(i)>info['length']:
            info['word']=i
            info['length']=len(i)
    return f'word is {info["word"]} and length is {info["length"]}'
# print(returnLargestStr(['hello','best','salomu aleykum']))
def orderNumbers(list):
    print(sorted(list))
    return 
print(orderNumbers([0,1,2,5,1,11,25,3]))




    
    