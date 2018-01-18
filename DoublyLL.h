#include<stdio.h>
#include<malloc.h>

struct node
{
	int data;
	struct node *next,*prev;
};

typedef struct node NODE;


//Insert_First NODE
NODE *Insert_First(NODE *start,int val)
{
	NODE *NN=NULL;

	NN=(NODE *)malloc(sizeof(NODE));
	NN->next=NULL;
	NN->prev=NULL;
	NN->data=val;

	if(start==NULL)
	{
		start=NN;
	}

	else
	{
		NN->next=start;
		start->prev=NN;
		start=NN;
	}
	
	return start;
}


//Insert_Last NODE
NODE *Insert_Last(NODE *start,int val)
{
	NODE *temp=start,*NN=NULL;

	NN=(NODE *)malloc(sizeof(NODE));
	NN->next=NULL;
	NN->prev=NULL;
	NN->data=val;

	if(start==NULL)
	{
		start=NN;
	}

	else
	{
		while(temp->next!=NULL)
		{
			temp=temp->next;
		}
		temp->next=NN;
		NN->prev=temp;
	}
	return start;
}



//Calculate Length
int Len(NODE *start)
{
	NODE *temp=start;
	int count=0;
	while(temp!=NULL)
	{
		temp=temp->next;
		count++;
	}
	
	return count;
}


//Insert Node At Given Pos
NODE *Insert_Pos(NODE *start,int val,int pos)
{
	NODE *temp=start,*NN=NULL;
	int len=Len(start);
	int i=1;

	if(pos==1)
	{
		start=Insert_First(start,val);
	}

	else if(pos==len+1)
	{
		start=Insert_Last(start,val);
	}
	
	else if(pos>len+1)
	{
		printf("\nSorry");
	}

	else
	{
		NN=(NODE *)malloc(sizeof(NODE));
		NN->next=NULL;
		NN->prev=NULL;
		NN->data=val;

		while(temp!=NULL)
		{
			if(i==(pos-1))
			{

				NN->next=temp->next;
				temp->next->prev=NN;
				temp->next=NN;
			}

			temp=temp->next;
			i++;
		}
	}
	return start;
}



//Delete First NODE
NODE *Delete_First(NODE *start)
{
	NODE *temp=start;
	start=start->next;
	free(temp);
	start->prev=NULL;

	return start;
}


//Delete Last NODE
NODE *Delete_Last(NODE *start)
{
	NODE *temp=NULL,*temp1=NULL;

	temp=start;

	while(temp->next!=NULL)
	{
		temp1=temp;
		temp=temp->next;
	}

	temp1->next=NULL;
	free(temp);
	temp->prev=NULL;
	

	return start;
}


//Delete Node At Any Position
NODE *Delete_Pos(NODE *start,int pos)
{
	NODE *temp=NULL,*temp1=NULL;

	int i=1;
	temp=start;
	while(temp!=NULL)
	{
		if(i==pos-1)
		{
			temp1=temp->next;
			temp->next=temp1->next;
			temp1->next->prev=temp;
			free(temp1);
		}
			temp=temp->next;
			i++;
	}


	return start;
}


	


//Display Linked List
void Display(NODE *start)
{
	NODE *temp=start;
	while(temp!=NULL)
	{
		printf("<-%d->",temp->data);
		temp=temp->next;
	}
}

