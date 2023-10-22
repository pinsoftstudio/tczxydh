ans='{"title":"","intro":{"tit":"","cnt":""},"pics":['
while 1:
    a=input()
    if(a=='#'):break
    else:ans+='{"url":"'+a+'","dtl":""},'
ans+="]}"
print(ans)
while 1:pass
