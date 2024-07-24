#include <stdio.h>


void  greet(){
  printf("Welcome to here");
}

void add(int a, int b){
    int c = a+b;
    printf(" This sum is %d \n",c);
}

int main(int argc, char const *argv[])
{
    /* code */
    greet();
    add(55555, 888888);
    printf("Hello World");
    return 0;
}
