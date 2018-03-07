
import time
nums = []

start = int(round(time.time()*1000))
# print(start)
for i in range(0, 1000):
    for j in range(0, 1000):
        nums.append(i * 1000 + j)
end = int(round(time.time()*1000))
# print(end)

# It seems that this returns seconds:
print(time.time())

print(end - start)
