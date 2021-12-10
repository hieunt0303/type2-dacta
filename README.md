## LINK DEMO
 https://hieunt0303.github.io/type2-dacta/
## HƯỚNG ĐI 
VÍ DỤ : 

```javascript
  (TT i TH {1..n-1}. TT j TH {i+1..n}.a(i) <= a(j))
```
## BƯỚC 1 : 
- TÁCH THÀNH TỪNG CỤM GỒM MẢNG CÁC VÒNG FOR : formatArrLoop
- VÀ ĐIỀU KIỆN IF : conditionIf

![image](https://user-images.githubusercontent.com/66076345/145595792-fecb7f21-3379-4a99-a2ad-6cb12950ba37.png)



## BƯỚC 2 : 
- CHUYỂN 'formatArrLoop' THÀNH CÁC VÒNG FOR 
- CHUYỂN 'conditionIf' THÀNH IF LỒNG TRONG CÙNG CÁC VÒNG FOR 
- TIẾN HÀNH ĐÓNG MỞ NGOẶC VÀ KHOẢNG CÁCH TAB GIỮA CÁC DÒNG 

```javascript
for(let i = 1;i <n-1;++i) {
	for(let j = i+1;j <n;++j) {
		if (a(i)<=a(j))
			return true
	}
}
return false
```
