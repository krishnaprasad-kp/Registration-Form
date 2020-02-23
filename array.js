arr=[1,2,3,4]
console.log('st:arr=[1,2,3,4]')
console.log('st:arr.length=2')
arr.length=2
console.log('arr=',arr)
arr.length=4
console.log('st:arr.length=4')
console.log('arr=',arr)
console.log('st:arr[6]=10')
arr[6]="10"
console.log('arr=',arr)
console.log('arr[5]',arr[5])
console.log('st:arr=[4,3,2,1]')
arr=[4,3,2,1]
console.log('arr=',arr)
arr.push(0)
console.log('st:arr.push(0)')
console.log('arr=',arr)
arr.pop(0)
console.log('st:arr.pop(0)')
console.log('arr',arr)
arr.unshift("5")
console.log('st:arr.unshift("5")')
console.log('arr',arr)
arr.shift()
console.log('st:arr.shift()')
console.log(arr)
arr.splice(1,2)
console.log('st:arr.splice(1,2)')
console.log(arr)
arr=[1,2,3,4]
console.log('st:arr=[1,2,3,4]')
console.log('arr.slice(1)',arr.slice(1))
console.log('arr.indexOf(2)',arr.indexOf(2))
console.log("arr.indexOf('2')",arr.indexOf('2'))
console.log('arr.length=-1...Throws exception')
console.log('Object.keys(arr):',Object.keys(arr))
console.log('...arr',...arr)
st:a1=[1,2]
console.log('st:a1=[1,2]')
st:a2=[3,4]
console.log('st:a2=[3,4]')
console.log('a1+a2:',a1+a2)
console.log('a1.concat(a2):',a1.concat(a2))
a2=[0,1,2,3,4,5,6]
a3=[11,12,13,14,15,16]
console.log('st:a2=[0,1,2,3,4,5,6]')
console.log('a2.copyWithin(1,3,5):',a2.copyWithin(1,3,5))
console.log('st:a3=[11,12,13,14,15,16]')
iter=a3.entries()
console.log('st:iter=a3.entries()')
console.log('iter.next().value',iter.next().value)
console.log('iter.next().value',iter.next().value)
threshold=val=>val>=10
console.log('st:threshold=val=>val>=10')
console.log('st:a3.every(threshold)',a3.every(threshold))
threshold=val=>val>=12
console.log('st:threshold=val=>val>=12')
console.log('st:a3.every(threshold)',a3.every(threshold))
console.log('a3.reverse()',a3.reverse())
square=num=>num**2
console.log('a3.map(square)',a3.map(square))
a=[-1,-4,-8,0,9,86,47,87]
pos=num=>num>0
console.log('st:a=[-1,-4,-8,0,9,86,47,87]')
console.log('a.filter(pos)',a.filter(pos))
console.log(a.map(pos))
a=[1,2,3,4,5]
reducer=(result,current)=>result*current
console.log('st:a=[1,2,3,4,5]')
console.log('st:reducer=(result,current)=>result*current')
console.log('a.reduce(reducer)',a.reduce(reducer))
a=[1,2,3]
reducer=(result,current)=>result**2-current
console.log('a=[1,2,3]')
console.log('reducer=(result,current)=>result**2-current')
console.log('a.reduceRight(reducer))',a.reduceRight(reducer))










