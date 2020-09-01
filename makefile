DOCS=index awards experience publication research teaching

HDOCS=$(addsuffix .html, $(DOCS))
# PHDOCS=$(addprefix html/, $(HDOCS))

.PHONY : docs
docs : $(HDOCS)

.PHONY : update
update : $(HDOCS)
	@echo -n 'Copying to server...'
	# insert code for copying to server here.
	git push
	@echo ' done.'

%.html : %.jemdoc MENU
	jemdoc -o $@ $<

.PHONY : clean
clean :
	-rm -f *.html