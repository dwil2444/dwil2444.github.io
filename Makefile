HUGO=hugo
PORT=1313

.PHONY: serve build clean new

serve:
	$(HUGO) server -D --port $(PORT)

build:
	$(HUGO)

clean:
	rm -rf public resources

new:
ifndef name
	$(error "Usage: make new name=my-post")
endif
	$(HUGO) new content/posts/$(name).md
