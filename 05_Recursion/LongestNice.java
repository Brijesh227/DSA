import java.util.*;
class HelloWorld {
    public static int[] dnC(String s, int start,int end){
        Map<Character,Integer> set = new HashMap();
        for (int i = start; i <= end; i++) {
            set.put(s.charAt(i),1);
        }
        
        for(int i=start;i<=end;++i) {
            if(!set.containsKey(Character.toUpperCase(s.charAt(i))) || !set.containsKey(Character.toLowerCase(s.charAt(i)))) {
                if(i-1-start > end-i+1){
                    return dnC(s,start,i-1);
                } else {
                    return dnC(s,i+1,end);
                }
            }
        }
        return new int[] {end,start};
    }    

    public static void main(String[] args) {
        String s = "cc";
        int[] arr = dnC(s,0,s.length()-1);
        for(int a: arr){
            System.out.print(a+" ");
        }
    }
}